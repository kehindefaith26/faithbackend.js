import matplotlib.pyplot as plt
import networkx as nx

# Create a graph
G = nx.DiGraph()

# Define nodes and connections
nodes = [
    "Family & Friends", "Academic Network", "Professional Network", "Online Communities",
    "Family Members", "Friends", "Professors", "Classmates", "Alumni",
    "Internship Colleagues", "Mentors", "LinkedIn Connections", "Tech Forums"
]

edges = [
    ("Family & Friends", "Family Members"),
    ("Family & Friends", "Friends"),
    ("Academic Network", "Professors"),
    ("Academic Network", "Classmates"),
    ("Academic Network", "Alumni"),
    ("Professional Network", "Internship Colleagues"),
    ("Professional Network", "Mentors"),
    ("Online Communities", "LinkedIn Connections"),
    ("Online Communities", "Tech Forums")
]

# Add nodes and edges to the graph
G.add_nodes_from(nodes)
G.add_edges_from(edges)

# Define positions for a neat layout
pos = nx.spring_layout(G, seed=42)

# Draw the graph
plt.figure(figsize=(10, 8))
nx.draw_networkx_nodes(G, pos, node_size=2000, node_color="lightblue")
nx.draw_networkx_edges(G, pos, arrowstyle="->", arrowsize=15, edge_color="gray")
nx.draw_networkx_labels(G, pos, font_size=10, font_color="black")

plt.title("Personal Network Map", fontsize=14)
plt.axis("off")
plt.show()