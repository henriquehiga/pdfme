import { Route, Routes, useSearchParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Designer from './routes/Designer';
import FormAndViewer from './routes/FormAndViewer';
import Templates from './routes/Templates';

export default function App() {
  const [searchParams] = useSearchParams();
  const isEmbedded = searchParams.get('embed') === 'true';

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path={'/'} element={<Designer />} />
        <Route path={'/designer'} element={<Designer />} />
        <Route path="/form-viewer" element={<FormAndViewer />} />
        <Route path="/templates" element={<Templates isEmbedded={isEmbedded} />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}
