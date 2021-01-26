#!/usr/bin/env python3

import os, json, time, textwrap
from dotenv import load_dotenv
from client import MaiDXClient

# Main program code
if __name__ == "__main__":

    # Load environment file.
    load_dotenv()
    username = os.getenv("DXNET_USR")
    password = os.getenv("DXNET_PWD")

    # Check how long the program runs for.
    start_time = time.time()

    # Create a new instance of the client and login
    c = MaiDXClient()
    c.login(username, password)

    # Print player data.
    p = c.getPlayerData()
    print(textwrap.dedent(f"""\
    ------------------------------
    Player: {p['name']}
    Rating: {p['rating']}
    Star Count: {p['star_count']}
    Play Count: {p['play_count']}
    Last Played: {p['last_played']}
    ------------------------------"""))

    # Get player record.
    r = c.getPlayerRecord()
    
    # Get player history.
    h = c.getPlayerHistory()

    # Get image urls.
    i = c.getImageURLs()

    # Merge records.
    records = []
    for x in range(len(r)):
        record = {}
        record['id'] = x
        record['song'] = r[x]['song']
        record['artist'] = i[x]['artist']
        record['genre'] = r[x]['genre']
        record['version'] = r[x]['version']
        record['cover'] = i[x]['url']
        record['data'] = r[x]['data']
        records.append(record)

    player = {}
    player['avatar'] = p['player_logo']
    player['name'] = p['name']
    player['rating'] = p['rating']
    player['play_count'] = p['play_count']
    player['last_played'] = p['last_played']
    player['record'] = records

    with open(f'{username}_overview.json', 'w+') as fp:
        json.dump(player, fp, indent=3, ensure_ascii=False)
        print(f"Full export complete.")

    # Confirm execution time.
    print(f"Export of records complete. (%s seconds)" % round((time.time()-start_time), 2))
    

    

    

