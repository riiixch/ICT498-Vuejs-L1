<script>
export default {
    name: 'CustomerList',
    data() {
        return {
            customers: [] // เก็บข้อมูลลูกค้าที่ดึงจาก API
        };
    },
    mounted() {
        this.fetchCustomers(); // ดึงข้อมูลเมื่อ component ถูก mount
    },
    methods: {
        async fetchCustomers() {
            try {
                const response = await fetch('http://localhost/vuejs-1/api/customer/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                this.customers = data;
            } catch (error) {
                console.error('Error fetching customers:', error.message);
                this.customers = []; // รีเซ็ตข้อมูลถ้ามีข้อผิดพลาด
            }
        }
    }
};
</script>

<template>
    <div class="container">
        <h1 class="title">Customer List</h1>
        <p class="author">By 65064435 Sompop Iemsombat</p>
        <table class="customer-table" v-if="customers.length">
            <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone Number</th>
                    <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                    <td>{{ customer.id }}</td>
                    <td>{{ customer.first_name }}</td>
                    <td>{{ customer.last_name }}</td>
                    <td>{{ customer.phone_number }}</td>
                    <td>{{ customer.username }}</td>
                </tr>
            </tbody>
        </table>
        <p v-else class="error-message">Loading customers... or failed to fetch data.</p>
    </div>
</template>

<style scoped>
.container {
    padding: 2rem;
    text-align: center;
    background-color: #f8f9fa;
    min-height: 100vh;
}

.title {
    color: #2c3e50;
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.author {
    color: #28a745;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.customer-table {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    border-collapse: collapse;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.customer-table th,
.customer-table td {
    padding: 0.75rem;
    border: 1px solid #dee2e6;
    text-align: left;
}

.customer-table th {
    background-color: #2c3e50;
    color: #fff;
}

.customer-table td {
    color: #34495e;
}

.error-message {
    color: #dc3545;
    font-size: 1rem;
}

@media (max-width: 768px) {
    .title {
        font-size: 2rem;
    }

    .customer-table {
        font-size: 0.9rem;
    }

    .customer-table th,
    .customer-table td {
        padding: 0.5rem;
    }
}
</style>