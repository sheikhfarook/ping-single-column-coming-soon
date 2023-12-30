import Dashboard from "../assets/illustration-dashboard.png";
import { LiaFacebookF } from "react-icons/lia";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
const PingPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const onSubmit = (data) => {
    if (data)
      toast({
        title: "congregation.",
        description: "Details will be shared with you very soon.",
        status: "success",
        duration: 9000,
        isClosable: false,
      });
  };
  return (
    <div className=" font-libre text-center mt-20">
      {/* header */}
      <div className="space-y-10">
        <div className="space-y-2.5 text-center ">
          <h2 className="font-[700] text-[2rem] text-[#15202A] max-sm:text-[1.25rem] ">
            PING<span className="text-[#4C7BF3]  max-sm:text-[1.25rem]">.</span>{" "}
          </h2>
          <div className="space-y-1 text-center">
            <h1 className="font-[300] text-[3rem] leading-[3.75rem] text-[#969696] max-sm:text-[1.375rem] max-sm:leading-[2rem]">
              We are launching{" "}
              <span className="font-[700] text-[#15202A]"> soon! </span>
            </h1>
            <p className="font-[300] text-[1.25rem] max-sm:text-[0.75rem]">
              Subscribe and get notified
            </p>
          </div>
        </div>
        {/* email form */}
        {/* <div className="space-y-"> */}
        <div className=" gap-5 m-auto w-[40rem] max-sm:w-[17.5625rem] ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex max-sm:flex-col">
              <div className="flex-col">
                <div>
                  <input
                    className={`w-[26.3125rem] h-[3.5rem] text-[1rem] leading-[1.25rem]
                    text-[#15202A] border-2 border-[#C2D3FF] rounded-[1.75rem] pl-7 m-auto focus:outline-none
                     max-sm:w-full max-sm:h-[2.5rem] max-sm:text-[0.75rem] ${
                       errors.email ? "border-[#FF5466]" : ""
                     }`}
                    {...register("email", {
                      required: true,
                    })}
                    type="email"
                    placeholder="Your email address..."
                  />
                </div>
                <div>
                  {errors?.email?.type === "required" && (
                    <p
                      className="w-full text-[#FF5466] relative right-20 text-[0.75rem] 
                    leading-[1.25rem] tracking-[0.00938rem] mt-3 max-sm:tracking-[0.00781rem]
                     max-sm:text-[0.625rem] max-sm:ml-20 max-sm:mt-2">
                      Please provide a valid email address
                    </p>
                  )}
                </div>
              </div>
              <div>
                <button className="ml-4">
                  <div
                    className="w-[12.5rem] h-[3.5rem] text-[#FFF] bg-[#4C7BF3] 
                    rounded-[1.75rem] py-[1rem] text-[1rem] text-center font-[600] 
                    max-sm:w-[17.625rem]  max-sm:mt-5 max-sm:h-[2.5rem] max-sm:text-[0.75rem] 
                    max-sm:py-[0.8rem] max-sm:leading-[1rem] max-sm:-ml-5">
                    Notify Me
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* graph img */}
      <div>
        <img
          className="w-[35.45188rem] h-[22.4195rem] rounded-[0.30681rem] bg-[#FBFCFF] m-auto mt-24
          max-sm:w-[17.72594rem] max-sm:h-[11.239rem] max-sm:rounded-[0.15338rem]"
          src={Dashboard}
          alt=""
        />
      </div>
      {/* logo footer */}
      <div className="space-y-7 mt-20">
        <div className="gap-[1.2625rem] content-center inline-flex ">
          <div className="w-[1.9515rem] h-[1.9515rem] rounded-full p-[6px] border-2">
            <LiaFacebookF fontSize={15} color="#4C7BF3" />
          </div>
          <div className="w-[1.9515rem] h-[1.9515rem] rounded-full p-[7px] border-2">
            <FaTwitter fontSize={15} color="#4C7BF3" />
          </div>

          <div className="w-[1.9515rem] h-[1.9515rem] rounded-full py-[9px] px-[8px] border-2 max-sm:p-[7.5px]">
            <GrInstagram fontSize={13} color="#4C7BF3" />
          </div>
        </div>
        <div>
          <p
            className="font-[300] text-[0.75rem] text-[#969696] mb-20
          max-sm:text-[0.625rem]">
            © Copyright Ping. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PingPage;
