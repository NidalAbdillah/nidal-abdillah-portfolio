import subprocess
from flask import Flask, request, send_file, jsonify
import os

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/convert', methods=['POST'])
def convert_document():
    if 'file' not in request.files:
        return jsonify({"error": "Tidak ada file yang dikirim"}), 400

    file = request.files['file']
    input_path = os.path.join(UPLOAD_FOLDER, file.filename)

    # Ambil format input & output dari parameter
    from_format = request.form.get('from', 'markdown')  # default markdown
    to_format = request.form.get('to', 'docx')          # default docx
    filename_without_ext = os.path.splitext(file.filename)[0]
    output_filename = f"{filename_without_ext}.{to_format}"
    output_path = os.path.join(UPLOAD_FOLDER, output_filename)

    # Validasi format file dan dukungan untuk template PowerPoint
    supported_formats = ['markdown', 'docx', 'pptx', 'ppt']
    if from_format not in supported_formats or to_format not in supported_formats:
        return jsonify({"error": f"Format tidak didukung. Format yang didukung: {supported_formats}"}), 400

    file.save(input_path)

    try:
        # Jalankan pandoc
        subprocess.run(
            ['pandoc', input_path, '-f', from_format, '-t', to_format, '-o', output_path, '--standalone'],
            check=True
        )
        return send_file(output_path, as_attachment=True)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)