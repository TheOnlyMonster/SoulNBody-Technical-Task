import React, { useState } from "react";
import "./TransactionModal.css";

const TransactionModal = ({ onClose, onSave }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <button className="close-button" onClick={onClose}>
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <h2 className="modal-title">الحركات المالية لشؤون الموظفين</h2>
        </div>

        <div className="modal-register-section">
          <button className="register-button">السجل</button>
        </div>

        <div className="modal-form">
          <div className="form-row">
            <div className="form-field">
              <label>الموظف</label>
              <div className="select-container-modal">
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
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                <span>أحمد محمد</span>
              </div>
            </div>

            <div className="form-field">
              <label>التاريخ</label>
              <div className="select-container-modal-date">
                
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

            <div className="form-field">
              <label>نوع الحركة</label>
              <div className="select-container-modal">
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
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                <span>خصم</span>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label>المبلغ</label>
              <div className="input-container">
                <input type="text" value="1522" />
              </div>
            </div>

            <div className="form-field">
              <label>السبب</label>
              <div className="input-container">
                <input type="text" value="تأخر" />
              </div>
            </div>

            <div className="form-field">
              <button className="save-button" onClick={onSave}>
                حفظ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
