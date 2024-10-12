import { useForm } from "react-hook-form";
import { FormSchema } from "./schemas/schemas";
import { z } from "zod";
import { Input } from "./components/ui/Input/Input";
import { SetStatus } from "../wailsjs/go/main/App";
import toast from "react-hot-toast";
import { useId } from "react";
import { ClientIdModal } from "./components/ClientIdModal/CliendIdModal";
import { zodResolver } from "@hookform/resolvers/zod";

export default function App() {
  const formId = useId();

  type FormValues = z.infer<typeof FormSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: FormValues) {
    const status = await SetStatus(data);
    if (!status.Success) {
      toast.error("An error occurred while setting status");
      return;
    }
    toast.success("Status set successfully");
  }

  return (
    <div className="flex flex-col gap-5 p-5 bg-discord-gray min-h-screen text-center font-ggSansRegular">
      <p className="text-5xl font-ggSansBold text-discord-blue">Presency</p>
      <ClientIdModal />
      <form
        id={formId}
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Codin"
          type="text"
          label="Details"
          error={errors.details?.message}
          required={true}
          {...register("details")}
        />
        <Input
          placeholder="Idk what I am doing"
          type="text"
          label="State"
          error={errors.state?.message}
          required={true}
          {...register("state")}
        />
        <Input
          placeholder="coding-cat"
          type="text"
          label="Large image key"
          error={errors.largeImageKey?.message}
          required={true}
          {...register("largeImageKey")}
        />
        <Input
          placeholder="A coding cat"
          type="text"
          label="Large image text"
          error={errors.largeImageText?.message}
          required={true}
          {...register("largeImageText")}
        />
        <Input
          placeholder="coding-cat-small"
          type="text"
          label="Small image key"
          error={errors.smallImageKey?.message}
          required={false}
          {...register("smallImageKey")}
        />
        <Input
          placeholder="A coding cat but small"
          type="text"
          label="Small image text"
          error={errors.smallImageText?.message}
          required={false}
          {...register("smallImageText")}
        />
      </form>
      <button
        type="submit"
        form={formId}
        className="p-1 bg-discord-blue text-white rounded font-ggSansBold text-lg opacity-90 hover:opacity-100 drop-shadow"
      >
        Set
      </button>
    </div>
  );
}
