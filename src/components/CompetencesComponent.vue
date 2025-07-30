<script setup>
import { 
  ChatBubbleLeftRightIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon, 
  StarIcon,
  PuzzlePieceIcon 
} from '@heroicons/vue/24/outline';

const competences = [
  {
    icon: ChatBubbleLeftRightIcon,
    key: 'ai_consulting'
  },
  {
    icon: RocketLaunchIcon,
    key: 'efficiency_ai'
  },
  {
    icon: ShieldCheckIcon,
    key: 'data_protection'
  },
  {
    icon: StarIcon,
    key: 'swiss_made'
  },
  {
    icon: PuzzlePieceIcon,
    key: 'ai_integration'
  }
];
</script>

<template>
  <section id="competences">
    <div class="competences-container">
      <h2>{{ $t('competences.title') }}</h2>
      <div class="competences-list">
        <div v-for="(c, i) in competences" :key="i" class="competence-card">
          <div class="competence-icon">
            <component :is="c.icon" />
          </div>
          <h3>{{ $t(`competences_section.${c.key}.title`) }}</h3>
          <p>{{ $t(`competences_section.${c.key}.desc`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.competences-container {
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
.competences-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
}
.competence-card {
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
.competence-card:hover {
  box-shadow: 0 8px 32px 0 rgba(30, 34, 90, 0.13);
  transform: translateY(-6px) scale(1.03);
}
.competence-icon {
  width: 70px;
  height: 70px;
  margin-bottom: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--kelepar-color-second);
  border-radius: 50%;
  box-shadow: 0 2px 8px 0 rgba(30, 34, 90, 0.08);
}
.competence-icon svg {
  width: 32px;
  height: 32px;
  color: var(--kelepar-color-main);
}
h3 {
  font-size: var(--h3-desktop);
  color: var(--kelepar-color-main);
  margin-bottom: 0.7rem;
  font-weight: 600;
}
p {
  color: var(--kelepar-font-color);
  font-size: 1.05em;
}
@media (max-width: 900px) {
  .competences-list {
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }
  .competence-card {
    max-width: 100%;
    width: 100%;
  }
}
</style>