import { createServer, Model } from "miragejs";

export const makeServer = () => {
	return createServer({
		models: {
			transaction: Model,
		},

		seeds(server) {
			server.db.loadData({
				transactions: [
					{
						id: 5,
						title: "Internet",
						amount: -200,
						type: "withdraw",
						category: "Casa",
						createdAt: new Date("2024-11-20 09:00:00"),
					},
					{
						id: 4,
						title: "Desenvolvimento de Website",
						amount: 12000,
						type: "deposit",
						category: "Desenvolvimento",
						createdAt: new Date("2024-11-17 09:00:00"),
					},
					{
						id: 3,
						title: "Investimentos",
						amount: 2900,
						type: "deposit",
						category: "Investimentos",
						createdAt: new Date("2024-11-08 09:00:00"),
					},
					{
						id: 2,
						title: "Restaurante",
						amount: -300,
						type: "withdraw",
						category: "Alimentação",
						createdAt: new Date("2024-11-03 09:00:00"),
					},
					{
						id: 1,
						title: "Aluguel",
						amount: -2000,
						type: "withdraw",
						category: "Casa",
						createdAt: new Date("2024-11-01 09:00:00"),
					},
				],
			});
		},

		routes() {
			this.namespace = "api";

			this.get("/transactions", (schema) => {
				return schema.all("transaction");
			});

			this.post("/transactions", (schema, request) => {
				const data = JSON.parse(request.requestBody);
				return schema.create("transaction", data);
			});

			this.put("/transactions/:id", (schema, request) => {
				const newAttrs = JSON.parse(request.requestBody);
				const id = request.params.id;
				const transaction = schema.find("transaction", id);

				if (transaction) {
					return new Response(JSON.stringify(transaction.update(newAttrs)), {
						status: 200,
					});
				}

				return new Response(
					JSON.stringify({ error: "Transaction not found" }),
					{
						status: 404,
					}
				);
			});

			this.delete("/transactions/:id", (schema, request) => {
				const id = request.params.id;
				const transaction = schema.find("transaction", id);

				if (transaction) {
					transaction.destroy();
					return new Response(null, {
						status: 204,
					});
				}

				return new Response(
					JSON.stringify({ error: "Transaction not found" }),
					{
						status: 404,
					}
				);
			});
		},
	});
};
