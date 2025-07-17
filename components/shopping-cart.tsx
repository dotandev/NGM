"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Minus, Trash2 } from "lucide-react"
import { useState } from "react"

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  type: string
}

interface ShoppingCartProps {
  isOpen: boolean
  onClose: () => void
}

export default function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems((items) => items.filter((item) => item.id !== id))
    } else {
      setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 9998,
            }}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              width: "400px",
              height: "100vh",
              backgroundColor: "white",
              zIndex: 9999,
              display: "flex",
              flexDirection: "column",
              boxShadow: "-10px 0 30px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: "24px",
                borderBottom: "1px solid #e5e5e5",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "rgb(34, 197, 94)",
                  margin: 0,
                }}
              >
                Your Cart
              </h2>
              <button
                onClick={onClose}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  borderRadius: "50%",
                  transition: "background-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f5f5f5"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent"
                }}
              >
                <X size={24} color="#666" />
              </button>
            </div>

            {/* Cart Content */}
            <div style={{ flex: 1, overflow: "auto" }}>
              {cartItems.length === 0 ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    color: "#666",
                    fontSize: "16px",
                  }}
                >
                  No items found.
                </div>
              ) : (
                <div style={{ padding: "24px" }}>
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        padding: "16px 0",
                        borderBottom: "1px solid #f0f0f0",
                      }}
                    >
                      <div style={{ flex: 1 }}>
                        <h4
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "rgb(34, 197, 94)",
                            margin: "0 0 4px 0",
                          }}
                        >
                          {item.name}
                        </h4>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#666",
                            margin: "0 0 8px 0",
                          }}
                        >
                          {item.type}
                        </p>
                        <p
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "rgb(34, 197, 94)",
                            margin: 0,
                          }}
                        >
                          ${item.price}
                        </p>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            border: "1px solid #e5e5e5",
                            background: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                        >
                          <Minus size={16} />
                        </button>

                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            minWidth: "24px",
                            textAlign: "center",
                          }}
                        >
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            border: "1px solid #e5e5e5",
                            background: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                          }}
                        >
                          <Plus size={16} />
                        </button>

                        <button
                          onClick={() => removeItem(item.id)}
                          style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            border: "1px solid #ff4444",
                            background: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                            marginLeft: "8px",
                          }}
                        >
                          <Trash2 size={16} color="#ff4444" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div
                style={{
                  padding: "24px",
                  borderTop: "1px solid #e5e5e5",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>Total:</span>
                  <span
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "rgb(34, 197, 94)",
                    }}
                  >
                    ${total}
                  </span>
                </div>

                <button
                  style={{
                    width: "100%",
                    backgroundColor: "rgb(34, 197, 94)",
                    color: "white",
                    border: "none",
                    padding: "16px",
                    borderRadius: "8px",
                    fontSize: "16px",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(21, 128, 61)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "rgb(34, 197, 94)"
                  }}
                >
                  Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
