import ReuseButton from "@/components/ui/Button/ReuseButton";
import { turnOffAutoRenew } from "@/services/PackageService/PackageServiceApi";
import tryCatchWrapper from "@/utils/tryCatchWrapper";
import { Modal } from "antd";

interface ShowAutoRenewCancleModalProps {
    isModalOpen: boolean;
    handleCancel: () => void;
}

const ShowAutoRenewCancleModal: React.FC<ShowAutoRenewCancleModalProps> = ({
    isModalOpen,
    handleCancel,
}) => {
    const handleSubmit = async () => {
        const res = await tryCatchWrapper(
            turnOffAutoRenew,
            "Wait a moment...",
        );

        console.log(res);

        if (res?.success) {
            handleCancel();
        }
    }

    return (
        <Modal
            // title="Confirm Delete"
            open={isModalOpen}
            onOk={handleCancel}
            onCancel={handleCancel}
            okText="Block"
            cancelText="Cancel"
            centered
            className="!w-[90%] !max-w-[500px]"
            footer={false}
        > {/* Title */}
            <h2 className="text-2xl font-bold text-center text-gray-900 mb-3 mt-6">
                Turn Off Auto-Renew?
            </h2>

            {/* Description */}
            <div className="text-center mb-6">
                <p className="text-gray-700 mb-4">
                    If you turn off auto-renew, your subscription will not automatically renew at the end of the current billing cycle.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-left rounded">
                    <p className="text-sm text-gray-800">
                        <span className="font-semibold">Important:</span> You will have a <span className="font-semibold text-blue-600">1-month grace period</span> after your subscription ends to reactivate auto-renew or manually renew your subscription. After this period, your account may be downgraded or suspended.
                    </p>
                </div>
            </div>





            <ReuseButton
                variant="error"
                onClick={() => handleSubmit()}
            >
                Turn Off Auto Renew
            </ReuseButton>

        </Modal>
    );
};

export default ShowAutoRenewCancleModal;
