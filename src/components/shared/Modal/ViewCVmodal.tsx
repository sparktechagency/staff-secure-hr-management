/* eslint-disable @typescript-eslint/no-explicit-any */
import SpinLoader from "@/components/ui/SpinLoader";
import { Modal } from "antd";
import { useEffect, useState } from "react";

interface ViewCVModalProps {
  isViewCVModalVisible: boolean;
  handleCancel: () => void;
  currentRecord: any | null;
  url: any;
}

const ViewCVModal: React.FC<ViewCVModalProps> = ({
  isViewCVModalVisible,
  handleCancel,
  currentRecord,
  url,
}) => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    if (url) {
      fetch(`/api/cv/${url}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
          return res.blob();
        })
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
          setLoading(false);
          setError(null);
        })
        .catch((err) => { setLoading(false); console.error("Failed to fetch PDF", err); setError(err.message); });
    }
  }, [url]);

  return (
    <Modal
      // title="Confirm Delete"
      open={isViewCVModalVisible}
      onOk={handleCancel}
      onCancel={handleCancel}
      okText="Block"
      cancelText="Cancel"
      centered
      className="!w-[90%] !max-w-[1000px]"
      footer={false}
    >
      <p className="text-xl font-semibold pt-10 pb-4 text-secondary-color">
        {currentRecord?.name}
      </p>
      {loading ? <SpinLoader /> : pdfUrl && (
        <iframe
          src={pdfUrl}
          width="100%"
          height="800px"
          allowFullScreen
        ></iframe>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </Modal>
  );
};

export default ViewCVModal;
