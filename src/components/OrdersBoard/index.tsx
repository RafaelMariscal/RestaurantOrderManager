import { useState } from "react";
import { toast } from "react-toastify";
import { Order } from "../../types/Order";
import { api } from "../../utils/api";
import { OrderModal } from "../OderModal";
import { Board, OrdersContainer } from "./styles";


interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOreder: (oderId: string) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOreder }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setSelectedOrder(order);
    setIsModalVisible(!isModalVisible);
  }

  function handleCloseModal() {
    setSelectedOrder(null);
    setIsModalVisible(!isModalVisible);
  }

  async function handleCancelOrder() {
    setIsLoading(true);
    await api.delete(`/orders/${selectedOrder!._id}`);
    toast.success(`Pedido da mesa ${selectedOrder!.table} cancelado!`);

    setIsLoading(false);
    onCancelOreder(selectedOrder!._id);
    setIsModalVisible(false);
  }


  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        isLoading={isLoading}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{orders.length}</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map(order => {
            return (
              <button type="button" key={order._id}
                onClick={() => handleOpenModal(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            );
          })}
        </OrdersContainer>
      )}


    </Board>
  );
}
