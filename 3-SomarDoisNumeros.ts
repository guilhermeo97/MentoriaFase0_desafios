function twoSum(nums: number[], target: number): number[] {
    const numMap: { [key: number]: number } = {}; // Mapa para armazenar os valores e seus índices
    
    for (let i = 0; i < nums.length; i++) {
        const dif = target - nums[i]; // Diferença necessária para alcançar o target
        
        if (numMap.hasOwnProperty(dif)) {
            return [numMap[dif], i]; // Retorna os índices dos dois números
        }
        
        numMap[nums[i]] = i; // Armazena o número atual no mapa com seu índice
    }
    
    return []; // Se não encontrar, retorna um array vazio
}

console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
