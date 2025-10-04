import { Field } from "./Field";

interface LoginFormProps {
  title: string;
  buttonTitle: string;
  error: string | undefined;
  formAction: (payload: FormData) => void;
  isPending: boolean;
}

export const LoginForm = ({
  title,
  formAction,
  error,
  buttonTitle,
  isPending,
}: LoginFormProps) => {
  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 bg-gray-900 p-8 pb-10 rounded-2xl"
    >
      <h1 className="text-white text-2xl text-center">{title}</h1>
      <Field label="Login" name="login" required />
      <Field label="Password" name="password" type="password" />
      {error && <div className="text-red-500">{error}</div>}
      <button
        type="submit"
        disabled={isPending}
        className="cursor-pointer mt-2 px-2 py-2 bg-accent text-white rounded"
      >
        {buttonTitle}
      </button>
    </form>
  );
};
