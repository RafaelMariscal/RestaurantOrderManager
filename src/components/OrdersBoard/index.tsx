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
  onChangeStatus: (oderId: string, status: Order["status"]) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOreder, onChangeStatus }: OrdersBoardProps) {
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

  async function handleChangeOrderStatus() {
    setIsLoading(true);

    const status = selectedOrder?.status === "WAITING"
      ? "IN_PRODUCTION"
      : "DONE";

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast.success(`Status do pedido da mesa ${selectedOrder?.table} alterado!`);
    onChangeStatus(selectedOrder!._id, status);
    setIsLoading(false);
    setIsModalVisible(false);

  }

  async function handleCancelOrder() {
    if (!selectedOrder) return;

    setIsLoading(true);
    await api.delete(`/orders/${selectedOrder._id}`);
    toast.success(`Pedido da mesa ${selectedOrder.table} cancelado!`);

    setIsLoading(false);
    onCancelOreder(selectedOrder._id);
    setIsModalVisible(false);
  }


  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handleCloseModal}
        onCancelOrder={handleCancelOrder}
        onChangeOrderStatus={handleChangeOrderStatus}
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
