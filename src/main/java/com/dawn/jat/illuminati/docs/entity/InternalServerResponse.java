package com.dawn.jat.illuminati.docs.entity;

import lombok.Data;
import lombok.Generated;

@Generated
@Data
public class InternalServerResponse {
    private ErrorPayload error;
    private boolean success = false;
}
