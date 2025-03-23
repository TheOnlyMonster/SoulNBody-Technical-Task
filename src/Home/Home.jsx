import React, { useState } from "react";
import "./Home.css";
import TransactionModal from "../TransactionModal/TransactionModal";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEmployee, setSelectedEmployee] = useState("الكل");

  // Mock employee list
  const employees = [
    "الكل",
    "أحمد محمود",
    "محمد علي",
    "سارة أحمد",
    "خالد محمد",
  ];

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSaveTransaction = () => {
    setShowModal(false);
  };

  // Static data
  const transactions = Array(8)
    .fill()
    .map(() => ({
      date: "12/10/2025",
      type: "خصم",
      amount: "200",
      reason: "تأخر",
      employee: "أحمد محمود",
    }));

  return (
    <div className="app" dir="rtl">
      {/* Top navigation bar */}
      <header className="header">
        <div className="header-actions">
          <div className="back-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>

          <div className="user-icon">
            <img src="./Logo.png" alt="Logo" />
          </div>
          <div className="welcome-text">مرحبا بك في شركة SB</div>
        </div>

        <div className="search-container">
          <input type="text" placeholder="ابحث هنا" className="search-input" />
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        <div className="user-profile">
          <div className="user-avatar">
            <img
              src="https://s3-alpha-sig.figma.com/img/50e2/bbc2/3961dfb1fb031d40ddc0d9f18d6f6392?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NApew2x6hmQJZVQm6pgPJO1iJ4G0bTuA46UhyFD0rDUOj7KzDa9jz~pa9abgrvkd29LX06CPENCIqBQukO3fbYDgASKWyMssjvvhqBiFykG3nl2emJQ5jEGG7OAB2C3PuCXYh2LGVtEXd4PENtUOkXSY4jA64lFtOLuR~fwZ~L0xUffBgZquhcIA-S5m9-x76GhLmH~zctr3ulLf~qwmwvu8DsTn7FeVnEUzeRqB0hkgmZSKBW3xYYBFf76ffGLTrXc3kecZBSAPYF3rJIJuz1FQKiExyD-5-JS9qCogaDQKcCrV3Q0Tzg9mRtAKbYuxXXHfc668Opt3WEIJVGD~Yw__"
              alt="profile"
            />
          </div>
          <div className="user-name">د/أحمد ابراهيم</div>
        </div>
      </header>

      {/* Main content */}
      <main className="main-content">
        <div className="content-container">
          <div className="content-header">
            <h1 className="page-title">سجل الحركات</h1>
          </div>

          {/* Tabs with properly positioned elements */}
          <div className="tabs">
            <button className="print-button tabs-print-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              طباعة
            </button>

            <div className="tabs-group">
              <div className="tab active">مرتبات</div>
              <div className="tab">خصم وإضافة</div>
            </div>
          </div>

          {/* Filters and actions */}
          <div className="actions-row">
            <div className="filters">
              <div className="filter-group">
                <label className="filter-label">الموظف</label>
                <div className="select-container">
                  <select
                    value={selectedEmployee}
                    onChange={(e) => setSelectedEmployee(e.target.value)}
                    className="employee-select"
                  >
                    {employees.map((employee, index) => (
                      <option key={index} value={employee}>
                        {employee}
                      </option>
                    ))}
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="select-icon"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
              <div className="filter-group">
                <label className="filter-label">التاريخ</label>
                <div className="select-container date-picker-container">
                  <input
                    type="month"
                    value={selectedDate.toISOString().substring(0, 7)}
                    onChange={(e) => {
                      const newDate = new Date(e.target.value);
                      setSelectedDate(newDate);
                    }}
                    className="date-input"
                  />
                </div>
              </div>
            </div>

            <button
              className="new-transaction-button"
              onClick={handleOpenModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              حركة حسابية جديدة
            </button>
          </div>

          {/* Print button right above table - no margin */}
          <div className="print-button-container">
            <button className="print-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              طباعة
            </button>
          </div>

          {/* Table */}
          <table className="transactions-table">
            <thead>
              <tr>
                <th>التاريخ</th>
                <th>نوع الحركة</th>
                <th>المبلغ</th>
                <th>السبب</th>
                <th>الموظف</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.reason}</td>
                  <td>{transaction.employee}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="pagination">
            <button className="pagination-nav next">
              <span>التالي</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            <div className="pagination-numbers">
              <div className="page-number">68</div>
              <div className="page-number">67</div>
              <div className="page-ellipsis">...</div>
              <div className="page-number">3</div>
              <div className="page-number">2</div>
              <div className="page-number active">1</div>
            </div>

            <button className="pagination-nav prev">
              <span>السابق</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </main>

      {showModal && (
        <TransactionModal
          onClose={handleCloseModal}
          onSave={handleSaveTransaction}
        />
      )}
    </div>
  );
}

export default Home;
