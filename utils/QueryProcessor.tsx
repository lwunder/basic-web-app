export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("andrew id")) {
    return "alicehon";
  }
  else if (query.toLowerCase().includes("name")) {
    return "Alice";
  }
  else if (query.includes("plus")) {
    query = query.substring(0, query.length-1);
    var words = query.split(" ");
    var sum = parseInt(words[2]) + parseInt(words[4])
    return String(sum);
  }
  else if (query.includes("largest")) {
    query = query.substring(0, query.length-1);
    var words = query.split(":");
    var numbers = words[1].split(", ");
    var max = 0;
    for (var num of numbers) {
      max = Math.max(parseInt(num), max);
    }
    return String(max);
  }
  else if (query.includes("multiplied")) {
    query = query.substring(0, query.length-1);
    var words = query.split(" ");
    var product = parseInt(words[2]) * parseInt(words[5])
    return String(product);
  }
  else if (query.includes("minus")) {
    query = query.substring(0, query.length-1);
    var words = query.split(" ");
    var diff = parseInt(words[2]) - parseInt(words[4])
    return String(diff);
  }
  // else if (query.includes("primes")) {
  //   query = query.substring(0, query.length-1);
  //   var words = query.split(" ");
  //   var diff = parseInt(words[2]) - parseInt(words[4])
  //   return String(diff);
  // }
  return "";
}
