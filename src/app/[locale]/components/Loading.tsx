export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh] gap-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-4 border-gray-300 dark:border-gray-600"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-blue-500 border-t-transparent dark:border-blue-400 dark:border-t-transparent"></div>
      </div>

      <p className="text-3xl font-medium mt-12 text-center text-gray-800 dark:text-gray-200">
        We're Loading your posts...
        <br />
        <br />
        <span className="text-xl text-gray-600 dark:text-gray-400">
          Be patient, it might take a few seconds :)
        </span>
      </p>
    </div>
  );
}
