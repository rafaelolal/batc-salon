import Toast from "./toast";

export default function ToastList(props: {
  toasts: { status: number; message: string }[];
}) {
  return (
    <>
      {props.toasts && (
        <div className="position-fixed bottom-0 end-0">
          {props.toasts.map(
            (toast: { status: number; message: string }, i: number) => (
              <Toast key={i} status={toast.status} message={toast.message} />
            )
          )}
        </div>
      )}
    </>
  );
}
