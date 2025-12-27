export default function Alert({ alert }) {
  return (
    <div className="min-h-[56px] flex items-center">
      {alert && (
        <div className="w-full flex items-center justify-between px-4 py-3 text-sm text-green-800 bg-green-100 rounded">
          <strong>{alert}</strong>
        </div>
      )}
    </div>
  );
}
