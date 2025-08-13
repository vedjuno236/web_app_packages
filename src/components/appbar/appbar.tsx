import { IoIosArrowBack } from 'react-icons/io';

declare global {
  interface Window {
    flutter_webview_channel?: {
      postMessage: (message: string) => void;
    };
  }
}

const Appbar = () => {
  const handleBackClick = () => {
    if (window.flutter_webview_channel && window.flutter_webview_channel.postMessage) {

      window.flutter_webview_channel.postMessage('goBack');
    } else {

      window.history.back();
    }
  };

  return (
    <header className="app-header bg-gray-800 text-white flex items-center justify-between p-4">
      <button
        className="back-button text-white text-xl hover:text-gray-300"
        onClick={handleBackClick}
      >
        <IoIosArrowBack />
      </button>
      <h1 className="title text-xl">Naga Packages</h1>
      <div className="status-bar">

      </div>
    </header>
  );
};

export default Appbar;