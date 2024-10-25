from app.config import get_cassandra_session

def cassandra_session():
    return get_cassandra_session()
