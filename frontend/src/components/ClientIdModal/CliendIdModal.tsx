import { Input } from "../ui/Input/Input";
import { z } from "zod";
import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useState } from "react";
import { ConnectDiscord } from "../../../wailsjs/go/main/App";

export const ClientIdModal = () => {
  const [isOpen, setOpen] = useState(true);

  const idSchema = z.object({
    id: z.string().length(19, "Client ID must be 19 characters long"),
  });

  type Values = z.infer<typeof idSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(idSchema),
  });

  async function onSubmit(values: Values) {
    const status = await ConnectDiscord(values.id);
    // if (!status.Success) {
    //   toast.error("An error occurred while setting ID");
    //   return;
    // }
    toast.success("ID set successfully");
    setOpen(false);
  }

  return (
    <>
      {isOpen && (
        <div className="flex justify-center items-center min-h-full fixed w-full inset-0 z-50 px-5">
          <div className="flex flex-col gap-3 bg-discord-gray rounded-lg drop-shadow-[0_0px_24px_rgba(0,0,0,0.75)]">
            <p className="text-start mt-3 mx-4 text-2xl text-discord-white font-ggSansSemibold">
              Client ID
            </p>
            <div className="bg-discord-white w-full h-px opacity-5"></div>
            <p className="mx-4 text-start text-md font-ggSansMedium text-white opacity-80">
              You need to set your Client ID first. You can get your client ID
              from the{" "}
              <a
                className="text-md font-ggSansMedium text-discord-blue"
                href="https://discord.com/developers/applications"
              >
                Developer Portal
              </a>
            </p>
            <div className="px-4">
              <Input
                placeholder="0123456789012345678"
                type="text"
                label="Client ID"
                error={errors.id?.message}
                {...register("id")}
              />
            </div>
            <div className="bg-discord-white w-full h-px opacity-5"></div>
            <button
              className="mx-4 p-1 mb-4 bg-discord-blue text-white rounded font-ggSansBold text-lg opacity-90 hover:opacity-100 drop-shadow"
              onClick={handleSubmit(onSubmit)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};
