<script setup>
const props = defineProps({
  stats: {
    type: Object,
    required: true,
    // { mine: number, verified: number, unverified: number }
  },
  detail: {
    type: Object,
    required: true,
    // { name, guidedTour, result, unitShown, preferred, notes }
  },
});

const emit = defineEmits(["update:detail", "submit"]);

function updateField(field, value) {
  const next = { ...props.detail, [field]: value };
  emit("update:detail", next);
}
</script>

<template>
  <div>
    <div class="leads-header">
      <span class="leads-title">Leads</span>
      <a href="#" class="leads-link">View All</a>
    </div>
    <div class="leads-cards">
      <div class="lead-card dark">
        <div class="num">{{ stats.mine }}</div>
        <div class="lbl">Mine</div>
      </div>
      <div class="lead-card light">
        <div class="num">{{ stats.verified }}</div>
        <div class="lbl">Verified</div>
      </div>
      <div class="lead-card light">
        <div class="num">{{ stats.unverified }}</div>
        <div class="lbl">Unverified</div>
      </div>
    </div>

    <div class="text-xs text-gray-600 mb-2">
      <p>
        <span class="lead-name">Lead:</span>
        <a href="#" class="text-blue-600 underline lead-name-link">{{ detail.name }}</a>
      </p>
      <div>
        <span class="guidedtour">Guided Tour:</span>
        <span class="guidedtour-name">{{ detail.guidedTour }}</span>
      </div>
    </div>

    <div class="mb-3">
      <label class="block text-sm text-gray-600 mb-1">Result</label>
      <v-select
        :items="['Completed - Interested', 'Completed - Not Interested']"
        :model-value="detail.result"
        @update:model-value="value => updateField('result', value)"
        variant="outlined"
        density="compact"
        class="custom-select"
        hide-details
      />
    </div>

    <div style="display: flex; column-gap: 10px">
      <div>
        <label class="block text-sm text-gray-600 mb-1">Unit Shown</label>
        <v-select
          :model-value="detail.unitShown"
          @update:model-value="value => updateField('unitShown', value)"
          variant="outlined"
          density="compact"
          class="small-input"
          hide-details
        />
      </div>
      <div>
        <label class="block text-sm text-gray-600 mb-1">Preferred</label>
        <v-select
          :model-value="detail.preferred"
          @update:model-value="value => updateField('preferred', value)"
          variant="outlined"
          density="compact"
          class="small-input"
          hide-details
        />
      </div>
    </div>

    <div>
      <label class="block text-sm text-gray-600 mb-1">Notes</label>
      <v-textarea
        label="Notes"
        :model-value="detail.notes"
        @update:model-value="value => updateField('notes', value)"
        rows="4"
        density="compact"
      />
    </div>

    <div class="d-flex justify-end mt-3">
      <div class="updateBtn-container">
        <button class="updateBtn" @click="emit('submit')">Update</button>
      </div>
    </div>
  </div>
</template>


