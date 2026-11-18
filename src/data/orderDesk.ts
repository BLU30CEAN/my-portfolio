export type OrderStatus = "paid-empty" | "paid" | "pending";

export type OrderLine = {
  sku: string;
  name: string;
  qty: number;
  stock: number;
};

export type OrderTicket = {
  id: string;
  table: string;
  requestId: string;
  status: OrderStatus;
  paidAt: string;
  lines: OrderLine[];
};

export const ORDER_TICKETS: OrderTicket[] = [
  {
    id: "O-2041",
    table: "T12",
    requestId: "req_7f3a2c",
    status: "paid-empty",
    paidAt: "12:04:11",
    lines: [
      { sku: "B-01", name: "아메리카노", qty: 2, stock: 48 },
      { sku: "F-12", name: "크로와상", qty: 1, stock: 0 },
    ],
  },
  {
    id: "O-2040",
    table: "T07",
    requestId: "req_12ab90",
    status: "paid",
    paidAt: "11:58:02",
    lines: [{ sku: "B-01", name: "아메리카노", qty: 1, stock: 48 }],
  },
  {
    id: "O-2039",
    table: "T03",
    requestId: "req_88c1e0",
    status: "pending",
    paidAt: "",
    lines: [{ sku: "D-04", name: "콜라", qty: 3, stock: 12 }],
  },
];

export type RcaLine = {
  source: string;
  requestId: string;
  at: string;
  body: string;
  match: boolean;
};

export const RCA_BY_REQUEST: Record<string, RcaLine[]> = {
  req_7f3a2c: [
    {
      source: "Datadog",
      requestId: "req_7f3a2c",
      at: "12:04:11.102",
      body: "PG approve=OK amount=8900",
      match: true,
    },
    {
      source: "API 로그",
      requestId: "req_7f3a2c",
      at: "12:04:11.140",
      body: "POST /orders timeout after payment callback",
      match: true,
    },
    {
      source: "DB",
      requestId: "req_7f3a2c",
      at: "12:04:11.141",
      body: "orders row missing. payments row exists.",
      match: true,
    },
  ],
  req_12ab90: [
    {
      source: "Datadog",
      requestId: "req_12ab90",
      at: "11:58:02.044",
      body: "PG approve=OK amount=4500",
      match: true,
    },
    {
      source: "API 로그",
      requestId: "req_12ab90",
      at: "11:58:02.071",
      body: "POST /orders 201",
      match: true,
    },
    {
      source: "DB",
      requestId: "req_12ab90",
      at: "11:58:02.080",
      body: "orders.id=2040 status=paid",
      match: true,
    },
  ],
  req_88c1e0: [
    {
      source: "Datadog",
      requestId: "req_88c1e0",
      at: "11:51:40.002",
      body: "checkout started",
      match: true,
    },
    {
      source: "API 로그",
      requestId: "req_88c1e0",
      at: "11:51:40.010",
      body: "POST /payments pending",
      match: true,
    },
    {
      source: "DB",
      requestId: "req_88c1e0",
      at: "11:51:40.011",
      body: "orders.status=pending",
      match: true,
    },
  ],
};

export const ORDER_STATUS_KO: Record<OrderStatus, string> = {
  "paid-empty": "결제됨 · 주문 없음",
  paid: "결제·주문 일치",
  pending: "결제 대기",
};
