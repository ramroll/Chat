package cn.sinjinsong.chat.server.util;

import java.nio.charset.StandardCharsets;

public class JSONMessageUtil {

    public static String deserialize(byte[] data){
        return new String(data, StandardCharsets.UTF_8);
    }
}
