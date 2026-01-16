import React from "react";
import { useState } from "react";
import LogoImage from "../assets/images/logo.svg";
import AvatarImage from "../assets/images/image-avatar.png";
import { Link } from "react-router-dom";
import {
  FaCartShopping,
  FaChevronLeft,
  FaChevronRight,
  FaMinus,
  FaPlus,
  FaBars,
} from "react-icons/fa6";
import Product_1 from "../assets/images/image-product-1.jpg";
import Product_2 from "../assets/images/image-product-2.jpg";
import Product_3 from "../assets/images/image-product-3.jpg";
import Product_4 from "../assets/images/image-product-4.jpg";

const Main = () => {
  /*--------------SLIDES------------ */
  const slides = [
    {
      id: 1,
      image: Product_1,
    },
    {
      id: 2,
      image: Product_2,
    },
    {
      id: 3,
      image: Product_3,
    },
    {
      id: 4,
      image: Product_4,
    },
  ];

  /*------------STATE------------------- */

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0); // cart badge
  const [quantity, setQuantity] = useState(0); // product quantity
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  /*-------------FUNCTIONS------------- */
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const addToCart = () => {
    if (quantity > 0) {
      setCartCount((prev) => prev + quantity);
      setQuantity(0); // reset after adding
    }
  };

  const clearCart = () => setCartCount(0);

  const togggleMenu = () => {
    setOpenNav((prev) => !prev);
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="lg:m-14 m-5 flex justify-between font-serif relative">
        <div className="flex gap-12 ">
          <div className="lg:hidden cursor-pointer z-50" onClick={togggleMenu}>
            <FaBars size={24} />
          </div>
          {/* LOGO */}
          <div>
            <Link to="/">
              <img src={LogoImage} alt="Logo" />
            </Link>
          </div>

          {/* NAV LINKS */}
          <div>
            <ul
              className={`
                lg:flex gap-4 text-neutral-500 font-light
                ${openNav ? "block" : "hidden"}
                absolute lg:static
                top-16 left-0
                bg-white
                w-full lg:w-auto
                p-6 lg:p-0
                z-50
                shadow-lg lg:shadow-none
              `}
            >
              <li className="py-2 lg:py-0">
                <Link>Collection</Link>
              </li>
              <li className="py-2 lg:py-0">
                <Link>Men</Link>
              </li>
              <li className="py-2 lg:py-0">
                <Link>Women</Link>
              </li>
              <li className="py-2 lg:py-0">
                <Link>About</Link>
              </li>
              <li className="py-2 lg:py-0">
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-6 relative">
          {/* CART ICON */}
          <div
            className="mt-3 relative cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <FaCartShopping />

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <div className="">
            <img src={AvatarImage} className="w-9 h-9" />
          </div>
        </div>

        {/* ================= CART DROPDOWN ================= */}
        {isCartOpen && (
          <div className="absolute right-0 top-12 w-80 bg-white shadow-xl rounded-lg z-50">
            <h3 className="font-bold border-b p-4">Cart</h3>

            {cartCount === 0 ? (
              <p className="p-6 text-center text-neutral-500 font-semibold">
                Your cart is empty
              </p>
            ) : (
              <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={slides[currentIndex].image}
                    alt="product"
                    className="w-12 h-12 rounded"
                  />

                  <div className="text-sm text-neutral-600">
                    <p>Fall Limited Edition Sneakers</p>
                    <p>
                      $125.00 × {cartCount}{" "}
                      <span className="font-bold text-black">
                        ${125 * cartCount}.00
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={clearCart}
                    className="ml-auto text-neutral-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>

                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-bold">
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </nav>

      <div className="border-b mx-14 border-neutral-200"></div>

      {/* MAIN CONTENT */}
      <div className="lg:m-26 m-3">
        <main className="flex lg:flex-row flex-col lg:gap-24 gap-0.5">
          <div>
            {/* MAIN IMAGE */}
            <div className="lg:w-80 lg:h-80 relative w-90 h-100">
              <div
                onClick={addToCart}
                style={{
                  backgroundImage: `url(${slides[currentIndex].image})`,
                }}
                className="lg:w-full lg:h-full lg:rounded-2xl bg-center bg-cover duration-500 w-90 h-90"
              ></div>
              {/*Left arrow */}
              <div className="absolute top-1/2 left-80 -translate-y-1/2 rounded-full p-2 bg-white cursor-pointer shadow-md text-2xl block lg:hidden">
                <FaChevronRight onClick={prevSlide} />
              </div>
              {/*Right arrow */}
              <div className="absolute top-1/2 right-80 -translate-y-1/2 rounded-full p-2 bg-white cursor-pointer shadow-md text-2xl block lg:hidden">
                <FaChevronLeft onClick={nextSlide} />
              </div>
            </div>

            <div className="cursor-pointer lg:flex gap-5 mt-7 hidden">
              {slides.map((slide, slideIndex) => (
                <img
                  key={slide.id}
                  src={slide.image}
                  alt="thumbnail"
                  onClick={() => {
                    setCurrentIndex(slideIndex);
                    addToCart();
                  }}
                  className={`w-16 h-16 object-cover cursor-pointer rounded-md border-2 transition
        ${
          currentIndex === slideIndex
            ? "border-orange-500 scale-105 opacity-40"
            : "border-gray-300 opacity-90"
        }`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: PRODUCT INFO */}
          <div className=" p-5 font-sans w-full  ">
            <div className="mb-3">
              <h2 className="lg:text-sm lg:font-medium Lg:text-neutral-500 text-xl font-bold text-neutral-500">
                SNEAKER COMPANY{" "}
              </h2>
            </div>
            <div className="mb-7 lg:font-semibold font-bold">
              <h1 className="lg:text-5xl text-3xl">
                Fall Limited Edition Sneakers
              </h1>
            </div>
            <div className="mb-5">
              <p className="text-neutral-500 text-xl font-semibold">
                These low-profile sneakers are your casual wear <br />
                companion. Featuring a durable rubber outer sole, they'll
                <br /> withstand everything the weather can offer.
              </p>
            </div>
            <div className="flex flex-row lg:flex-col justify-between">
              <div>
                <h5 className="mb-2 lg:text-xl font-bold text-2xl">
                  $125.00{" "}
                  <span className="lg:text-sm text-lg bg-neutral-900 text-white px-1 py-0.5 rounded-sm font-medium">
                    50%
                  </span>
                </h5>
              </div>
              <div>
                <p className="line-through lg:font-semibold text-neutral-500 text-xl font-bold">
                  $250.00
                </p>
              </div>
            </div>

            {/* QUANTITY + ADD TO CART */}
            <div className="flex flex-col lg:flex-row lg:gap-10 gap-5 mt-5">
              <div className="flex gap-7 bg-neutral-100 lg:px-2 lg:py-2 py-5 px-4 lg:rounded-sm rounded-lg justify-between">
                <span className="text-orange-500 font-semi-bold mt-1">
                  <FaMinus
                    onClick={decreaseQty}
                    className="text-orange-500 cursor-pointer"
                  />
                </span>
                <span className="text-neutral-600 font-bold">{quantity}</span>
                <span className="text-orange-500 font-semi-bold mt-1">
                  <FaPlus
                    onClick={increaseQty}
                    className="text-orange-500 cursor-pointer"
                  />
                </span>
              </div>

              <button
                onClick={addToCart}
                className="bg-orange-500 lg:px-8 lg:py-2 py-5 rounded-lg font-semibold flex gap-3 items-center cursor-pointer justify-center "
              >
                <FaCartShopping /> Add to cart
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
