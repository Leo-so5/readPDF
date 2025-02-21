import logo from './logo.svg';
import { Button, message, Upload } from 'antd';
import type { UploadProps } from 'antd';
import './App.css';

function App() {
  const props: UploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className="App">
      <Upload {...props}>
        <Button>Click to Upload</Button>
      </Upload>
    </div>
  );
}

export default App;
