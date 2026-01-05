
import ReuseButton from "@/components/ui/Button/ReuseButton";
import { Modal } from "antd";

interface ShowPackagePurchaseModalProps {
    isShowPackagePurchaseModalVisible: boolean;
    handleCancel: () => void;
}

const ShowPackagePurchaseModal: React.FC<ShowPackagePurchaseModalProps> = ({
    isShowPackagePurchaseModalVisible,
    handleCancel,
}) => {


    return (
        <Modal
            // title="Confirm Delete"
            open={isShowPackagePurchaseModalVisible}
            onOk={handleCancel}
            onCancel={handleCancel}
            okText="Block"
            cancelText="Cancel"
            centered
            className="!w-[90%] !max-w-[500px]"
            footer={false}
        >
            <div className="text-center mt-5">
                <h2 className="text-3xl text-secondary-color font-bold mb-4">Welcome to Staff Secure Ltd</h2>
                <p className="mb-6 text-base">Now Let’s find the perfect HR Management package for your business.</p>
                <ReuseButton
                    variant="secondary"
                    url="/packages"
                    className="!w-fit mx-auto"
                    onClick={handleCancel}
                >
                    Let’s Take a Look
                </ReuseButton>
            </div>

        </Modal>
    );
};

export default ShowPackagePurchaseModal;
