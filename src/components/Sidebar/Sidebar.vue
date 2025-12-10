<template>
  <div class="h-fit">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-chess-primary text-xl font-semibold m-0">Move History</h2>
      <button 
        @click="$emit('reset')" 
        class="bg-chess-primary text-white border-none px-4 py-2 rounded-md cursor-pointer font-medium text-sm transition-all duration-200 hover:bg-chess-primary-dark hover:-translate-y-0.5 hover:shadow-md"
      >
        Reset
      </button>
    </div>
    
    <div class="mb-4" v-if="clickedSquares.length > 0">
      <div class="flex justify-between items-center py-2">
        <span class="text-chess-gray text-sm">Total Clicks:</span>
        <span class="text-chess-primary font-bold font-mono">{{ clickedSquares.length }}</span>
      </div>
      <div class="flex justify-between items-center py-2">
        <span class="text-chess-gray text-sm">Last Square:</span>
        <span class="text-chess-primary font-bold font-mono">{{ clickedSquares[clickedSquares.length - 1].square }}</span>
      </div>
    </div>
    
    <div class="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-chess-primary scrollbar-track-gray-100" v-if="clickedSquares.length > 0">
      <div 
        v-for="move in clickedSquares" 
        :key="move.order"
        class="grid grid-cols-[40px_1fr_auto] md:grid-cols-[35px_1fr_auto] gap-3 md:gap-2 p-3 md:p-2.5 mb-2 bg-gray-50 rounded-md"
      >
        <span class="font-bold text-chess-primary text-sm md:text-xs flex items-center justify-center bg-chess-primary bg-opacity-10 rounded-full w-6 h-6 md:w-5 md:h-5">{{ move.order }}</span>
        <span class="font-mono font-bold text-chess-text text-base flex items-center">{{ move.square }}</span>
        <span class="text-xs text-chess-gray flex items-center">{{ move.timestamp }}</span>
      </div>
    </div>
    
    <div v-else class="text-center py-12 px-4 text-chess-gray">
      <p class="my-2 font-medium">Click squares on the board to track moves</p>
    </div>
  </div>
</template>

<script setup>
defineProps(['clickedSquares'])
defineEmits(['reset'])
</script>