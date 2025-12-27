export default function Alert({ alert, onClose }) {
  return (
    <div className="flex items-center justify-between p-4 mb-4 text-sm text-green-800 bg-green-100 rounded">
      <strong>{alert}</strong>

      
    </div>
  );
}
