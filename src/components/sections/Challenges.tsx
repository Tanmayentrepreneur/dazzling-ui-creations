export const Challenges = () => {
  return (
    <section className="bg-white py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Challenges</h2>
        <p className="text-lg text-center mb-4">
          Here are some of the challenges businesses face when implementing AI solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Challenge 1</h3>
            <p className="mt-2">Description of challenge 1.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Challenge 2</h3>
            <p className="mt-2">Description of challenge 2.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Challenge 3</h3>
            <p className="mt-2">Description of challenge 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
