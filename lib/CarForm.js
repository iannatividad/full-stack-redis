export default function CarForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    const res = await fetch("/api/cars", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="make">make</label>
        <input name="make" type="text" />
      </div>
      <div>
        <label htmlFor="model">model</label>
        <input name="model" type="text" />
      </div>
      <div>
        <label htmlFor="image">image</label>
        <input name="image" type="text" />
      </div>
      <div>
        <label htmlFor="description">description</label>
        <input name="description" type="text" />
      </div>

      <button type="submit">Create Car</button>
    </form>
  );
}
