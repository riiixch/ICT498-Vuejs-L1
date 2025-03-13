<script>
export default {
    name: 'AboutPage',
}
</script>

<template>
    <div class="bg-custom">
        <div class="container d-flex flex-column align-items-center p-5">
            <h1 class="title">Welcome to About Page</h1>
            <img src="https://profile.riiixch.com/img/profile.webp" alt="profile" class="profile-img">
            <p class="info-text">65064435 Sompop Iemsombat</p>
        </div>
    </div>
</template>

<style scoped>
.bg-custom {
    background-color: #e6e6e6;
}

.container {
    min-height: 100vh;
    /* ความสูงเต็มหน้าจอ */
    padding: 2rem 1rem;
    /* padding รอบด้าน */
    text-align: center;
    /* จัดข้อความตรงกลาง */
}

.title {
    color: #0051ff;
    /* สีหัวข้อ */
    font-size: 2.5rem;
    /* ขนาดตัวอักษร */
    margin-bottom: 1.5rem;
    /* ระยะห่างล่าง */
    font-weight: 700;
    /* ความหนา */
}

.profile-img {
    width: 250px;
    /* ความกว้างภาพ */
    height: auto;
    /* ความสูงปรับตามอัตโนมัติ */
    border-radius: 50%;
    /* ทำให้เป็นวงกลม */
    margin-bottom: 1rem;
    /* ระยะห่างล่าง */
    border: 3px solid #a200ff;
    /* เส้นขอบ */
    border-style: dashed;
    object-fit: cover;
    /* ป้องกันภาพบิดเบี้ยว */
}

.info-text {
    color: #3bd186;
    /* สีข้อความ */
    font-size: 1.5rem;
    /* ขนาดตัวอักษร */
    margin-top: 1rem;
    /* ระยะห่างบน */
    font-weight: bold;
    /* ความหนา */
}

/* Responsive design */
@media (max-width: 768px) {
    .title {
        font-size: 2rem;
        /* ลดขนาดหัวข้อในมือถือ */
    }

    .profile-img {
        width: 150px;
        /* ลดขนาดภาพในมือถือ */
    }

    .info-text {
        font-size: 1rem;
        /* ลดขนาดข้อความในมือถือ */
    }
}
</style>