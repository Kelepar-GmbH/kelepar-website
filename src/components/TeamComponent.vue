<script setup>
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import LazyImage from '@/components/LazyImage.vue';
import lukasImg from '@/assets/img/team/lukas.webp';
import larsImg from '@/assets/img/team/lars.webp';
import lucaImg from '@/assets/img/team/luca.webp';

const team = [
  {
    name: 'Lukas Unterschütz',
    key: 'lukas',
    img: lukasImg,
    linkedin: 'https://www.linkedin.com/in/lukas-untersch%C3%BCtz/'
  },
  {
    name: 'Lars Stalder',
    key: 'lars',
    img: larsImg,
    linkedin: 'https://www.linkedin.com/in/lars-stalder/'
  },
  {
    name: 'Luca Raneri',
    key: 'luca',
    img: lucaImg,
    linkedin: 'https://www.linkedin.com/in/lucaraneri/'
  }
];
</script>

<template>
  <section id="team">
    <div class="team-container">
      <h2>{{ $t('team.title') }}</h2>
      <div class="team-list">
        <div v-for="member in team" :key="member.name" class="team-card">
          <div class="team-img">
            <LazyImage :src="member.img" :alt="member.name" width="300" height="300" />
          </div>
          <h3>{{ member.name }}</h3>
          <p class="team-role">{{ $t(`team_section.${member.key}.role`) }}</p>
          <IconLinkedin :url="member.linkedin" />
          <p class="team-desc">{{ $t(`team_section.${member.key}.desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.team-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 3rem 1rem;
  text-align: center;
}
h2 {
  font-size: var(--h2-desktop);
  color: var(--kelepar-color-main);
  margin-bottom: 2.5rem;
  font-weight: 700;
}
.team-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
}
.team-card {
  background: var(--kelepar-color-neutral);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  padding: 2.5rem 2rem 2rem 2rem;
  max-width: 260px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
}
.team-card:hover {
  box-shadow: 0 8px 32px 0 rgba(30, 34, 90, 0.13);
  transform: translateY(-6px) scale(1.03);
}
.team-img {
  width: 90px;
  height: 90px;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--kelepar-color-second);
  border-radius: 50%;
  box-shadow: 0 2px 8px 0 rgba(30, 34, 90, 0.08);
  overflow: hidden;
}
.team-img img {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 50%;
}
h3 {
  font-size: var(--h3-desktop);
  color: var(--kelepar-color-main);
  margin-bottom: 0.3rem;
  font-weight: 600;
}
.team-role {
  color: var(--kelepar-color-highlight-one);
  font-weight: 500;
  margin-bottom: 0.7rem;
}
.team-desc {
  color: var(--kelepar-font-color);
  font-size: 1.05em;
  margin-top: 0.7rem;
}
@media (max-width: 900px) {
  .team-list {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  .team-card {
    max-width: 100%;
    width: 100%;
  }
}
</style>