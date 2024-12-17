const tickets = [
  ["Paris", "Skopje"],
  ["Zurich", "Amsterdam"],
  ["Prague", "Zurich"],
  ["Barcelona", "Berlin"],
  ["Kiev", "Prague"],
  ["Skopje", "Paris"],
  ["Amsterdam", "Barcelona"],
  ["Berlin", "Kiev"],
  ["Berlin", "Amsterdam"],
];

function reconstructRoute(startCity, tickets) {
  const graph = new Map();
  tickets.forEach(([from, to]) =>
    graph.has(from) ? graph.get(from).push(to) : graph.set(from, [to])
  );
  for (let [_, dests] of graph) dests.sort().reverse();

  const route = [];
  const dfs = (city) => {
    while (graph.get(city)?.length) dfs(graph.get(city).pop());
    route.push(city);
  };

  dfs(startCity);
  return route.reverse();
}

console.log("Travel Route:", reconstructRoute("Kiev", tickets).join(" -> "));
