const FormSubmitPractice = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.userName || !formData.email || !formData.password) {
      alert("All fields are required");
      return;
    }
    console.log("formdata", formData);
  };

  const valueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={(e) => valueChange(e)}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => valueChange(e)}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={(e) => valueChange(e)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormSubmitPractice;
