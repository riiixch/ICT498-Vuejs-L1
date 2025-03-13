<script>
import { useRoute } from 'vue-router';

export default {
    name: 'NavbarMenu',
    setup() {
        const route = useRoute();
        
        // คำนวณว่าเป็นหน้า active หรือไม่ พร้อม fallback
        const isActive = (path) => {
            // ตรวจสอบว่า route.path มีค่าหรือไม่ ถ้าไม่มีให้ return false
            if (!route || !route.path) {
                return false;
            }

            return route.path === path || route.path === `${path}`;
        };

        return {
            isActive
        };
    }
};
</script>

<template>
    <nav class="navbar-menu d-flex flex-row justify-content-center align-items-center bg-light fixed-top">
        <a 
            href="/home" 
            class="nav-link mx-2" 
            :class="{ 'active': isActive('/home') }"
        >
            Home
        </a>
        <a 
            href="/about" 
            class="nav-link mx-2" 
            :class="{ 'active': isActive('/about') }"
        >
            About
        </a>
        <a 
            href="/contact" 
            class="nav-link mx-2" 
            :class="{ 'active': isActive('/contact') }"
        >
            Contact
        </a>
        <a 
            href="/customer-api" 
            class="nav-link mx-2" 
            :class="{ 'active': isActive('/customer-api') }"
        >
            Customer API
        </a>
    </nav>
</template>

<style scoped>
.navbar-menu {
    padding: 1rem 0;
    background-color: transparent;
    border-bottom: 1px solid #e0e0e0;
}

.nav-link {
    color: #28a745;
    text-decoration: none;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    padding: 0.5rem 1rem;
}

.nav-link:hover {
    color: #218838;
}

.nav-link.active {
    color: #218838;
    font-weight: bold;
}

@media (max-width: 768px) {
    .navbar-menu {
        flex-direction: column;
        padding: 0.5rem;
    }
    
    .nav-link {
        padding: 0.75rem 0;
        width: 100%;
        text-align: center;
    }
}
</style>