import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "../../axios";

import { InverterSelect } from "../../components/admin/InverterSelect";
import { AreaSelect } from "../../components/admin/AreaSelect";
import { BrandSelect } from "../../components/admin/BrandSelect";
import { CountrySelect } from "../../components/admin/CountrySelect";
import { RatingSelect } from "../../components/admin/RatingSelect";

const AddProduct: React.FC = () => {
  const [title, setTitle] = React.useState("");
  const [inverter, setInverter] = React.useState("есть");
  const [area, setArea] = React.useState("25 м² - 30 м²");
  const [brand, setBrand] = React.useState("Toshiba");
  const [country, setCountry] = React.useState("Китай");
  const [price, setPrice] = React.useState("");
  const [rating, setRating] = React.useState("7");
  const [imageUrl, setImageUrl] = React.useState("");
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const { id } = useParams();
  const isEditing = Boolean(id);

  const navigate = useNavigate();

  const handleChangeFile = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      if (!event.target.files) return;

      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImageUrl(data.url);
    } catch (error) {
      console.log(error);
      alert("Ошибка при загрузке файла");
    }
  };

  const addProductHandler = async () => {
    try {
      if (Boolean(title) && Boolean(price)) {
        const fields = {
          title,
          inverter,
          area,
          brand,
          country,
          price: Number(price),
          imageUrl,
          rating,
        };

        if (isEditing) {
          await axios.patch(`/api/products/${id}`, fields);
        } else {
          await axios.post("/api/products", fields);
        }

        navigate("/admin/products");
      } else {
        console.log("validation message");
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    async function getProduct() {
      try {
        const { data } = await axios.get(`/api/products/${id}`);
        setTitle(data.title);
        setInverter(data.inverter);
        setArea(data.area);
        setBrand(data.brand);
        setCountry(data.country);
        setPrice(data.price);
        setImageUrl(data.imageUrl);
        setRating(data.rating);
      } catch (error) {
        console.log(error);
      }
    }

    if (id) {
      getProduct();
    }
  }, []);

  return (
    <div className="admin-add-product">
      <div className="admin-add-product__header">
        <Link to="/admin/products">
          <svg
            width="26"
            height="26"
            viewBox="0 0 46 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="45"
              height="45"
              rx="3.5"
              stroke="#434343"
            />
            <path
              d="M12.2929 22.2929C11.9024 22.6834 11.9024 23.3166 12.2929 23.7071L18.6569 30.0711C19.0474 30.4616 19.6805 30.4616 20.0711 30.0711C20.4616 29.6805 20.4616 29.0474 20.0711 28.6569L14.4142 23L20.0711 17.3431C20.4616 16.9526 20.4616 16.3195 20.0711 15.9289C19.6805 15.5384 19.0474 15.5384 18.6569 15.9289L12.2929 22.2929ZM33 22L13 22L13 24L33 24L33 22Z"
              fill="#373737"
            />
          </svg>
        </Link>
        <h1>{isEditing ? "Редактировать товар" : "Добавить товар"}</h1>
      </div>
      <h2>Название</h2>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Введите название"
        type="text"
      />
      <InverterSelect setInverter={setInverter} inverter={inverter} />
      <AreaSelect setArea={setArea} area={area} />
      <BrandSelect setBrand={setBrand} brand={brand} />
      <CountrySelect setCountry={setCountry} country={country} />
      <h2>Цена</h2>
      <input
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        placeholder="22 000"
        type="text"
      />
      <h2>Изображения</h2>
      <button
        onClick={() => inputFileRef.current?.click()}
        className="admin-button"
      >
        Загрузить изображение
      </button>
      <input
        ref={inputFileRef}
        onChange={handleChangeFile}
        type="file"
        hidden
      />
      <RatingSelect setRating={setRating} rating={rating} />
      <button
        disabled={
          [title, price, imageUrl].every((field) => Boolean(field)) === false
        }
        onClick={addProductHandler}
        className="admin-button"
      >
        {isEditing ? "Сохранить" : "Создать товар"}
      </button>
    </div>
  );
};

export default AddProduct;
