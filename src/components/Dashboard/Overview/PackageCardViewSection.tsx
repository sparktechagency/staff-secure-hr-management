import { IMySubscription } from "@/types";
import { formatDate } from "@/utils/dateFormet";

const PackageCardViewSection = ({
  mySubscription,
}: {
  mySubscription: IMySubscription;
}) => {
  console.log(mySubscription)
  return (
    <div className="w-full bg-white rounded-xl border border-gray-200 p-5 shadow-sm mt-10">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-500 mb-1">Current Package</p>

          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-color">
              {mySubscription?.type}
            </h2>
            <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-0.5 rounded-full capitalize">
              {mySubscription?.status}
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Purchased :{" "}
            <span className="font-medium text-gray-700">
              {formatDate(mySubscription?.buyTime)}
            </span>
          </p>
        </div>

        {/* <button className="bg-blue-900 text-white text-sm px-4 py-1.5 rounded-md hover:bg-blue-800 transition">
          Manage
        </button> */}
      </div>

      {/* CV Info */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm lg:text-base font-semibold text-gray-600">
            CVs Available
          </p>
          {
            mySubscription?.type === "Diamond" ? <p className="text-sm lg:text-base font-semibold text-gray-600">
              <span className=" font-semibold text-gray-900">
                {mySubscription?.usedCV}
              </span>{" "}
              / Unlimited requirement
            </p> : <p className="text-sm lg:text-base font-semibold text-gray-600">
              <span className=" font-semibold text-gray-900">
                {mySubscription?.usedCV}
              </span>{" "}
              / {mySubscription?.limit} per requirement
            </p>
          }

        </div>

        {/* Progress Bar */}
        <div className="w-full h-5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-secondary-color rounded-full"
            style={{
              width: `${(mySubscription?.usedCV / mySubscription?.limit) * 100
                }%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PackageCardViewSection;
