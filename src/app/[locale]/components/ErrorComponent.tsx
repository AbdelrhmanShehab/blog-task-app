export default function ErrorComponent() {
  return (
    <div className="flex justify-center items-center h-[60vh] text-3xl font-medium">
      <p>
        Oooops we encountered an error while fetching the data.
        <br />
        <br />
        Please try again later or check your internet connection.
      </p>
    </div>
  );
}
