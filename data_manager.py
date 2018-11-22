import database_common


@database_common.connection_handler
def get_mentor_names(cursor):
    cursor.execute("""
                    SELECT mentors.first_name, mentors.last_name
                    FROM mentors
                    WHERE city = 'Budapest' or 'Miskolc';
                   """)
    return cursor.fetchall()
