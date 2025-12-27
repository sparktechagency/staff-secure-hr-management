"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ChangeEvent, useEffect } from "react";
import ReuseInput from "./ReuseInput";
import { SearchOutlined } from "@ant-design/icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Form, Typography } from "antd";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  placeholder: string;
  className?: string;
  label?: string;
  labelSize?: 1 | 2 | 3 | 4 | 5;
  labelClassName?: string;
  inputClassName?: string;
  formClassName?: string;
  isPage?: boolean;
  paramName?: string; // new prop to dynamically change the parameter name
  onSearchChange?: (value: string) => void; // callback for when search value changes
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  className = "",
  label,
  labelSize = 5,
  labelClassName = "",
  inputClassName = "",
  formClassName = "",
  isPage = true,
  paramName = "search", // default param name is "search"
  onSearchChange,
}) => {
  const [form] = Form.useForm();
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();
  const { replace } = router;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    debounceSearch(e.target.value);
    // Call the onSearchChange callback if provided
    if (onSearchChange) onSearchChange(e.target.value);
  };

  const debounceSearch = debounce((value: string) => {
    const text = value;
    const params = new URLSearchParams(searchParams);
    if (text) {
      params.set(paramName, text); // Use the dynamic paramName
      if (isPage) {
        params.set("page", "1");
      }
    } else {
      params.delete(paramName); // Remove the dynamic paramName if text is empty
    }
    replace(`${pathName}?${params.toString()}`, { scroll: false });
  }, 500);

  function debounce<T extends (...args: any[]) => void>(
    this: void,
    func: T,
    wait: number
  ) {
    let timeout: NodeJS.Timeout;
    return function (...args: Parameters<T>) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  useEffect(() => {
    const text = searchParams.get(paramName); // Use the dynamic paramName here
    if (text) {
      form.setFieldsValue({ search: text });
    } else {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("flex gap-4 items-center", className)}>
      <Form form={form} className={cn(formClassName)}>
        {label && (
          <Typography.Title
            level={labelSize}
            className={cn("!text-base-color !font-normal", labelClassName)}
          >
            {label}
          </Typography.Title>
        )}
        <ReuseInput
          name="search"
          type="text"
          placeholder={placeholder}
          onChange={handleSearch}
          inputClassName={cn(
            "!bg-primary-color !text-base-color !border-[#E1E1E1]",
            inputClassName
          )}
          prefix={<SearchOutlined className="text-[#667185] text-xl mr-2" />}
        />
      </Form>
    </div>
  );
};

export default SearchInput;
