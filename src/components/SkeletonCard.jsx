const SkeletonCard = () => {
  return (
    <div className="animate-pulse space-y-3">
      <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl"></div>
      <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
    </div>
  );
};

export default SkeletonCard;