
import ReuseButton from "@/components/ui/Button/ReuseButton";
import { Modal } from "antd";
import { IPricingPlan } from "../Cards/PricingCard";
import TermsOfService from "@/components/TermsOfService/TermsOfServicePage";

interface ViewSubscriptionAgreeModalProps {
    isModalOpen: boolean;
    handleCancel: () => void;
    currentRecord: IPricingPlan;
    handleSubmit: (payload: {
        subscriptionType: string, // 'Bronze' || 'Platinum' "| " 'Diamond'
        durationInMonths: number,
        amount: number,
        discount: number,
    }) => void;
}

const ViewSubscriptionAgreeModal: React.FC<ViewSubscriptionAgreeModalProps> = ({
    isModalOpen,
    handleCancel,
    currentRecord,
    handleSubmit
}) => {


    return (
        <Modal
            // title="Confirm Delete"
            open={isModalOpen}
            onOk={handleCancel}
            onCancel={handleCancel}
            okText="Block"
            cancelText="Cancel"
            centered
            className="!w-[90%] !max-w-[800px]"
            footer={false}
        >
            <div className="mt-10">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#162456]">
                    {currentRecord?.name}
                </h3>
                <div className="mt-1 flex items-baseline text-[#162456] mb-4">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black ">
                        £{currentRecord?.price}<span className="text-sm sm:text-base lg:text-lg">{" "}a month for a 12-month subscription</span>
                    </span>
                </div>
                <h4 className="text-base text-base-color mb-4">Please read the <span className="font-semibold">Terms & Conditions</span> below To continue to payment
                    {/* , you must scroll to the end and confirm your agreement. */}
                </h4>
                <div className="h-[50vh] lg:h-[60vh] overflow-y-auto p-4 border border-secondary-color my-5">
                    <TermsOfService />
                </div>

                <div className="flex items-end w-full">
                    <ReuseButton
                        variant="secondary"
                        className="!w-fit ml-auto"
                        onClick={() => handleSubmit({
                            subscriptionType: currentRecord.name, // 'Bronze' || 'Platinum' "| " 'Diamond'
                            durationInMonths: 1,
                            amount: currentRecord.price,
                            discount: 0,
                        })}
                    >
                        I Agree With Terms and Conditions
                    </ReuseButton>
                </div>
            </div>

        </Modal>
    );
};

export default ViewSubscriptionAgreeModal;
