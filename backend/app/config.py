import os
from cassandra.cluster import Cluster

class Config:
    CASSANDRA_KEYSPACE = "disaster_management"
    CASSANDRA_HOSTS = ["127.0.0.1"]  # Update with actual hosts if running Cassandra in cluster

def get_cassandra_session():
    cluster = Cluster(Config.CASSANDRA_HOSTS)
    session = cluster.connect()
    session.set_keyspace(Config.CASSANDRA_KEYSPACE)
    return session
