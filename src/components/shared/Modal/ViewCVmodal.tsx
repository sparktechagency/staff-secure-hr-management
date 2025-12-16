/* eslint-disable @typescript-eslint/no-explicit-any */
import { Modal } from "antd";
import { useEffect, useState } from "react";

interface ViewCVModalProps {
  isViewCVModalVisible: boolean;
  handleCancel: () => void;
  currentRecord: any | null;
}

const ViewCVModal: React.FC<ViewCVModalProps> = ({
  isViewCVModalVisible,
  handleCancel,
  currentRecord,
}) => {
  console.log(currentRecord);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  useEffect(() => {
    if (currentRecord?.cv) {
      fetch(`/api/cv/${currentRecord.cv}`)
        .then((res) => {
          if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
          return res.blob();
        })
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          setPdfUrl(url);
        })
        .catch((err) => console.error("Failed to fetch PDF", err));
    }
  }, [currentRecord]);

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
        {currentRecord?.name} CV
      </p>
      {pdfUrl && (
        <iframe
          src={pdfUrl}
          width="100%"
          height="800px"
          allowFullScreen
        ></iframe>
      )}
    </Modal>
  );
};

export default ViewCVModal;
