import { useState } from "react";
import "./App.css";

const menuItems = [
  {
    id: 1,
    name: "Paneer Tikka",
    description: "Grilled paneer with herbs and aromatic spices",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800",
  },
  {
    id: 2,
    name: "Palak Paneer",
    description: "Creamy spinach curry with soft paneer",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
  },
  {
    id: 3,
    name: "Vegetable Biryani",
    description: "Fragrant basmati rice with fresh vegetables",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800",
  },
  {
    id: 4,
    name: "Dal Tadka",
    description: "Yellow lentils with flavorful tempering",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800",
  },
  {
    id: 5,
    name: "Mushroom Masala",
    description: "Fresh mushrooms cooked in rich Indian spices",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=800",
  },
  {
    id: 6,
    name: "Mixed Vegetable Curry",
    description: "Seasonal vegetables in creamy curry",
    price: 9.49,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
  },
  {
    id: 7,
    name: "Veg Manchurian",
    description: "Crispy vegetable balls in tangy sauce",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=800",
  },
  {
    id: 8,
    name: "Hakka Veg Noodles",
    description: "Stir-fried noodles with colorful vegetables",
    price: 9.49,
    image: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800",
  },
  {
    id: 9,
    name: "Vegetable Fried Rice",
    description: "Wok-fried rice with fresh vegetables",
    price: 9.49,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
  },
  {
    id: 10,
    name: "Masala Dosa",
    description: "Crispy dosa filled with seasoned potatoes",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800",
  },
  {
    id: 11,
    name: "Chole Bhature",
    description: "Spiced chickpeas with fluffy bhature",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=800",
  },
  {
    id: 12,
    name: "Veg Samosa",
    description: "Crispy pastry filled with spiced vegetables",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
  },
  {
    id: 13,
    name: "Aloo Gobi",
    description: "Potatoes and cauliflower with Indian spices",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=800",
  },
  {
    id: 14,
    name: "Baingan Bharta",
    description: "Roasted eggplant with tomatoes and spices",
    price: 9.49,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800",
  },
  {
    id: 15,
    name: "Veg Kofta Curry",
    description: "Vegetable dumplings in creamy curry",
    price: 10.49,
    image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=800",
  },
  {
    id: 16,
    name: "Tandoori Vegetables",
    description: "Char-grilled vegetables with tandoori spices",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
  },
  {
    id: 17,
    name: "Garden Fresh Salad",
    description: "Crisp greens, vegetables and fresh herbs",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
  },
  {
    id: 18,
    name: "Veg Burger",
    description: "Crispy vegetable patty with fresh toppings",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=800",
  },
  {
    id: 19,
    name: "Margherita Pizza",
    description: "Tomato, mozzarella and fresh basil",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
  },
  {
    id: 20,
    name: "Creamy Mushroom Pasta",
    description: "Pasta with mushrooms in creamy sauce",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800",
  },
  {
    id: 21,
    name: "Tomato Basil Pasta",
    description: "Classic pasta with tomato and fresh basil",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=800",
  },
  {
    id: 22,
    name: "Vegetable Spring Rolls",
    description: "Crispy rolls filled with fresh vegetables",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1548507200-4e8c5b8f1a4e?w=800",
  },
  {
    id: 23,
    name: "Mango Lassi",
    description: "Refreshing yogurt drink blended with mango",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=800",
  },
  {
    id: 24,
    name: "Fresh Lime Mint",
    description: "Refreshing lime drink with fresh mint",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800",
  },
  {
    id: 25,
    name: "Gulab Jamun",
    description: "Soft milk dumplings soaked in sweet syrup",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1666190094762-1a7f4d1a6a17?w=800",
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    note: "",
  });

  const addToCart = (item) => {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existing) {
        return currentCart.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [...currentCart, { ...item, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCustomerChange = (e) => {
    const { name, value } = e.target;

    setCustomer((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const placeOrder = (e) => {
    e.preventDefault();

    if (!customer.name || !customer.phone || !customer.address) {
      alert("Please fill in your name, phone and address.");
      return;
    }

    const orderItems = cart
      .map(
        (item) =>
          `${item.name} x ${item.quantity} = $${(
            item.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    const message = `🌿 PURE VEG - NEW ORDER

👤 Customer: ${customer.name}
📞 Phone: ${customer.phone}
📧 Email: ${customer.email || "Not provided"}

📍 Delivery Address:
${customer.address}

🍽️ ORDER:
${orderItems}

💰 TOTAL: $${totalPrice.toFixed(2)}

📝 Special Instructions:
${customer.note || "None"}`;

    const whatsappNumber = "8801987120964";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    setCart([]);
    setCheckoutOpen(false);
    setCartOpen(false);

    setCustomer({
      name: "",
      phone: "",
      email: "",
      address: "",
      note: "",
    });
  };

  return (
    <div className="restaurant">
    <video
  className="restaurant-bg-video"
  autoPlay
  muted
  loop
  playsInline
>
  <source src="/restaurant-bg.mp4" type="video/mp4" />
</video>

<div className="restaurant-bg-overlay"></div>

      <nav className="navbar">
        <div className="logo">
          PURE <span>VEG</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>

          <button onClick={() => setCartOpen(true)}>
            🛒 Cart ({totalItems})
          </button>
        </div>
      </nav>

      <main id="home" className="hero">

        <div className="hero-content">
          <p className="small-title">
            🌿 100% PURE VEGETARIAN
          </p>

          <h1>
            Fresh Food.
            <br />
            <span>Pure Taste.</span>
          </h1>

          <p className="description">
            traditional flavors and a modern touch.
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="primary-btn">
              Explore Menu
            </a>

            <a href="#menu" className="secondary-btn">
              Order Now →
            </a>
          </div>
        </div>

        <div className="food-display">
          <div className="glow"></div>

          <div className="food-circle">
            🥗
          </div>

          <div className="floating-card card-one">
            🥑 Fresh Ingredients
          </div>

          <div className="floating-card card-two">
            ⭐ 100% Vegetarian
          </div>
        </div>

      </main>

      <section id="menu" className="menu-section">

        <div className="menu-heading">
          <p>OUR MENU</p>

          <h2>
            Deliciously <span>Vegetarian</span>
          </h2>

          <p>
            Explore our selection of fresh, flavorful vegetarian dishes.
          </p>
        </div>

        <div className="menu-grid">

          {menuItems.map((item) => (
            <div className="food-card" key={item.id}>

              <div className="food-image">
                <img src={item.image} alt={item.name} />

                <div className="veg-badge">
                  🌿 VEG
                </div>
              </div>

              <div className="food-info">

                <h3>{item.name}</h3>

                <p>{item.description}</p>

                <div className="food-bottom">

                  <strong>
                    ${item.price.toFixed(2)}
                  </strong>

                  <button onClick={() => addToCart(item)}>
                    + Add
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      <section id="about" className="about">

        <p>ABOUT PURE VEG</p>

        <h2>
          Healthy Food.
          <br />
          <span>Happy Life.</span>
        </h2>

        <p>
          At PURE VEG, we believe vegetarian food can be healthy,
          beautiful and incredibly delicious.
        </p>

      </section>

      <footer id="contact">

        <h2>PURE VEG</h2>

        <p>
          Fresh • Healthy • Vegetarian
        </p>

        <p>
          📞 01987120964
          &nbsp; | &nbsp;
          ✉️ hello@pureveg.com
        </p>

      </footer>

      {cartOpen && (

        <div
          className="cart-overlay"
          onClick={() => setCartOpen(false)}
        >

          <div
            className="cart-panel"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="cart-header">

              <div>
                <p>YOUR ORDER</p>
                <h2>Shopping Cart</h2>
              </div>

              <button
                className="close-cart"
                onClick={() => setCartOpen(false)}
              >
                ✕
              </button>

            </div>

            {cart.length === 0 ? (

              <div className="empty-cart">

                <div>🛒</div>

                <h3>Your cart is empty</h3>

                <p>
                  Add some delicious vegetarian food!
                </p>

                <button
                  onClick={() => setCartOpen(false)}
                >
                  Browse Menu
                </button>

              </div>

            ) : (

              <>

                <div className="cart-items">

                  {cart.map((item) => (

                    <div
                      className="cart-item"
                      key={item.id}
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">

                        <h3>{item.name}</h3>

                        <p>
                          ${item.price.toFixed(2)}
                        </p>

                        <div className="quantity-controls">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                          >
                            −
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                          >
                            +
                          </button>

                        </div>

                      </div>

                      <div className="cart-item-right">

                        <strong>
                          $
                          {(
                            item.price * item.quantity
                          ).toFixed(2)}
                        </strong>

                        <button
                          className="remove-item"
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                        >
                          Remove
                        </button>

                      </div>

                    </div>

                  ))}

                </div>

                <div className="cart-summary">

                  <div className="summary-row">
                    <span>Items</span>
                    <strong>{totalItems}</strong>
                  </div>

                  <div className="summary-row total-row">
                    <span>Total</span>

                    <strong>
                      ${totalPrice.toFixed(2)}
                    </strong>
                  </div>

                  <button
                    className="checkout-btn"
                    onClick={() => {
                      setCartOpen(false);
                      setCheckoutOpen(true);
                    }}
                  >
                    Proceed to Checkout →
                  </button>

                </div>

              </>

            )}

          </div>

        </div>

      )}

      {checkoutOpen && (

        <div
          className="checkout-overlay"
          onClick={() => setCheckoutOpen(false)}
        >

          <div
            className="checkout-panel"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="checkout-header">

              <div>
                <p>PURE VEG</p>

                <h2>
                  Complete Your Order
                </h2>
              </div>

              <button
                className="close-cart"
                onClick={() => setCheckoutOpen(false)}
              >
                ✕
              </button>

            </div>

            <div className="checkout-total">

              <span>
                Order Total
              </span>

              <strong>
                ${totalPrice.toFixed(2)}
              </strong>

            </div>

            <form
              className="checkout-form"
              onSubmit={placeOrder}
            >

              <label>
                Full Name *

                <input
                  type="text"
                  name="name"
                  value={customer.name}
                  onChange={handleCustomerChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Phone Number *

                <input
                  type="tel"
                  name="phone"
                  value={customer.phone}
                  onChange={handleCustomerChange}
                  placeholder="+880 1XXXXXXXXX"
                  required
                />
              </label>

              <label>
                Email

                <input
                  type="email"
                  name="email"
                  value={customer.email}
                  onChange={handleCustomerChange}
                  placeholder="your@email.com"
                />
              </label>

              <label>
                Delivery Address *

                <textarea
                  name="address"
                  value={customer.address}
                  onChange={handleCustomerChange}
                  placeholder="Enter complete delivery address"
                  rows="3"
                  required
                />
              </label>

              <label>
                Special Instructions

                <textarea
                  name="note"
                  value={customer.note}
                  onChange={handleCustomerChange}
                  placeholder="Any special request?"
                  rows="2"
                />
              </label>

              <div className="payment-box">

                <h3>
                  Payment Method
                </h3>

                <div className="payment-options">

                  <label>
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                    />
                    Cash on Delivery
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="payment"
                    />
                    Pay at Restaurant
                  </label>

                </div>

              </div>

              <button
                type="submit"
                className="place-order-btn"
              >
                Place Order • ${totalPrice.toFixed(2)}
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;