# P2P (peer-to-peer) networks

`P2P network` - type of network where different computers communicate directly with each other without need for central server.

`peer` indicates that all participating computers/systems are equal.

`node` - each computer in the network

## client-server architecture
Multiple clients connect to a single central server.

For two clients to communicate with each other, the message must be routed through the server.

## history
- 1969 arpanet
- 1979 usenet
- 1999 napster
- 2000 gnutella, freenet
- 2001 bittorrent, kazaa
- 2003 skype
- 2009 bitcoin
- 2014 asset exchange (ae)
- 2018 aether

## types of P2P

various ways P2P networks can be structured or categorized:

### pure p2p model
- no central server/authority
- each node can act as client & server

### hybrid p2p model
- centralized server facilitates initial connection and peer discovery
- further communication between peers is decentralized
- balances benefits of decentralized network with centralized coordination

### blockchain-based p2p model
- decentralized network architecture principles combined with blockchain technology

## operation

### node initialization
- on bootup, a p2p network knows nothing about the network, since there is no central server.
- often devs provide trusted nodes (could be centralized servers or peers) in code for p2p client app to be used for initial peer discovery.

`node`: 
- IP address
- port number
- unique node ID

### discovery and connection
after node initialization, we need a way to discover and connect with other nodes.  some methods:
- centralized server / tracker server
- distributed hash tables (DHTs)
- broadcasting and multicasting

### distributed data storage
peers in p2p network share resources (files, computational power, other services) directly with each other

ex: In a file-sharing P2P network, each peer contributes a portion of its storage to host parts of files. This results in a distributed storage system where the complete file is reconstructed by combining contributions from multiple peers in the network.

### routing and lookup
- every node maintains lookup table (or routing table) to store node info of closest peers it knows

- depending on p2p protocol, different metrics are used to define distance between two peers.  `Kademlia` uses XOR-metric

### real-life applications
- file sharing
- blockchain-based apps
- communication
- distributed file/cloud storage
- p2p cdn

## PROS
### decentralization

### redundancy and reliability
- multiple peers have a copy of same data preventing a single point of failure

### scalability
in client-server, single server handles all requests and may get overloaded

in p2p, each request is not necessarily handled by a single node, reducing load

### distributed computing
processing is distributed among multiple nodes, increasing computing power

### file sharing and content distribution
p2p networks, especially protocols like BitTorrent, excel in distributing large files.  Users can download and upload simultaneously, reducing load on single server

### privacy and anonymity
increased by communicating directly with peers without the reliance on central server.

## CONS

### security
p2p networks can be more vulnarable - unauthorized access, malware distribution

### depenedency on peers
p2p thrives on presence of peers.  if certain nodes leave network, it can affect resource availability

### legal & copyright issues
p2p networks are known to share and spread copyrighted material

ex: metallica vs. napster

## regulatory frameworks for p2p
legal and ethical considerations:
- sharing copyrighted material
- blockchains need KYC (know your customer) to prevent money laundering and other illegal transactions
- p2p security is paramount
- ensure no malware in p2p

## the future?
p2p has gained traction with file sharing and cryptocurrency:  `DeFi (decentralized finance)` allows people to lend or borrow funds without relying on financial institute or brokerage.  most prominent: `Ethereum`

p2p could play role in how smart devices communicate: imagine smart fridge, coffee maker connecting without a server

