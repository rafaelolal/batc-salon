type ToastPropType = {
  status: number;
  message: string;
};

const statusCodes: { [key: number]: string } = {
  200: "success",
  400: "warning",
  401: "warning",
  500: "warning",
};

export default function Toast(props: ToastPropType) {
  return (
    <div
      className={`m-3 p-3 position-fixed bottom-0 end-0 bg-${
        statusCodes[props.status]
      }`}
    >
      <small>{props.message}</small>
    </div>
  );
}
